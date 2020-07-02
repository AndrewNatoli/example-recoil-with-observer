# Recoil with Observer

## About

Sometimes you may want to update your [Recoil](https://recoiljs.org/) atoms outside of a component so I used this as an opportunity to mess around with the observer pattern.

In addition to `<RecoilRoot>` as required by Recoil, I use a `<RecoilObserver/>` component that registers a few observers with the `defaultSubject` (implemented by `ObserverSubject`). The observers in this case simply take the received payload and update the Recoil state (`set___()`).

This lets you write to an atom from the `productService` even though it's outside the scope of React. The `productService` calls `defaultSubject.notify` when it completes its task, and since `<RecoilObserver/>` is listening to `defaultSubject` (using `attach`), it receives the message and updates the Recoil state. Any component using the effected atom(s) reflects the change.

## Demo

`<RecoilObserver/>` logs its events to the console, so keep an eye on that.

When you open the app, click the button to see a "product list" (`<ProductList/>`)by simulating a call with the `productService`. Each time you view the product list you'll get a randomly generated list. Then you can click a product to view its information on the `<ProductDetail/>` view.
