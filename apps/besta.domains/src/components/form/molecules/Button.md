# NOTE

Button is kept in `src/components/layout/Button` because it extends `Div` instead of `Input`.

Planning ahead for Typescript, `Button` will inherit types from HTML `div` instead of from `input`, because it is closer to it.

Also, we actually use Button as a menu link item and generic page element more often than as a form submit/cancel device.
