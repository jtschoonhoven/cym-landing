/**
 * Helpers for working with the Eventbrite checkout widget.
 * https://www.eventbrite.com/platform/docs/embedded-checkout
 */

export const EVENT_URL = 'https://www.eventbrite.com/e/change-your-mind-the-immersive-experience-tickets-490870335387';
export const MODAL_TRIGGER_ID = 'eventbrite-widget-modal-trigger';
export const MODAL_TRIGGER_UUIDS: string[] = [];
const ORDER_COMPLETE_LISTENERS: Array<() => void> = [];

const onOrderComplete = () => {
  ORDER_COMPLETE_LISTENERS.forEach((listener) => {
    listener();
  });
};

const CONFIG = {
  widgetType: 'checkout',
  eventId: '490870335387',
  modal: true,
  modalTriggerElementId: MODAL_TRIGGER_ID,
  onOrderComplete,
};

/**
 * Initialize Eventbrite widget. Automatically retries until script has finished loading.
 */
export const init = () => {
  // @ts-expect-error
  if (window.EBWidgets) {
    // Add the UUIDs of all the mounted buttons to `MODAL_TRIGGER_UUIDS` so we know which are active.
    document.querySelectorAll('[data-uuid]').forEach((el) => {
      const uuid = el.getAttribute('data-uuid');
      uuid && MODAL_TRIGGER_UUIDS.push(uuid);
    });
    // @ts-expect-error
    return window.EBWidgets.createWidget(CONFIG);
  }
  setTimeout(init, 500);
};

/**
 * Add a callback function to be triggered when the user completes checkout.
 */
export const addOnOrderCompleteListener = (func: () => void) => {
  ORDER_COMPLETE_LISTENERS.push(func);
  return removeOnOrderCompleteListener(func);
};

/**
 * Removes a callback function that was listening to Eventbrite's `onOrderComplete`.
 */
export const removeOnOrderCompleteListener = (func: () => void) => {
  const index = ORDER_COMPLETE_LISTENERS.indexOf(func);
  if (index >= 0) {
    ORDER_COMPLETE_LISTENERS.splice(index, 1);
  }
};

export default {
  init,
  addOnOrderCompleteListener,
  removeOnOrderCompleteListener,
  MODAL_TRIGGER_ID,
  MODAL_TRIGGER_UUIDS,
  EVENT_URL,
};
