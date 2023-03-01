/**
 * Helpers for working with the Eventbrite checkout widget.
 * https://www.eventbrite.com/platform/docs/embedded-checkout
 */

import { CHECKOUT_MODAL_CONTAINER_HEIGHT_PX, CHECKOUT_MODAL_CONTAINER_ID } from '../components/checkout/CheckoutModal';

const ORDER_COMPLETE_LISTENERS: Array<() => void> = [];

const onOrderComplete = () => {
  ORDER_COMPLETE_LISTENERS.forEach((listener) => {
    listener();
  });
};

const CONFIG = {
  widgetType: 'checkout',
  eventId: '568447079517',
  iframeContainerId: CHECKOUT_MODAL_CONTAINER_ID,
  iframeContainerHeight: CHECKOUT_MODAL_CONTAINER_HEIGHT_PX,
  onOrderComplete,
};

/**
 * Initialize Eventbrite widget. Automatically retries until script has finished loading.
 */
export const init = () => {
  const el = document.getElementById(CHECKOUT_MODAL_CONTAINER_ID);
  // @ts-expect-error
  if (el && window.EBWidgets) {
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
};
