# ⚡ BTCart Fixed Alby

This Widget Accepts only alby payments and broadcasts the payment true (wizardkey) trigger to enable content to become visible.


## Configuration options
 - `name`: The name being displayed on the widget
 - `image`: Path to the image that is displayed on the widget
 - `to`: Where the payments should be sent to ([Lightning Address](https://lightningaddress.com/) or [LNURL](https://github.com/fiatjaf/lnurl-rfc))
 - `accent`: An accent color in RGB format to make your widget more colorful (i.e. `#20C997`)
 - `button-text`: The text to be displayed on the initial state of the widget (default: `Donate sats`)
 - `debug`: Debug mode, validates settings during initialization and displays configuration errors
 - `wizard`: false by default turns true when alby trigger is true
 - `freeamount`: true by default enables a input field to enter your own amount of sats

**Example**
```
<lightning-fixed-alby-trigger 
    name="René Aaron" 
    accent="#20c997" 
    to="reneaaron@getalby.com" 
    image="https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200" />
<script src="https://embed.twentyuno.net/js/app.js"></script>
```

## 🧑‍💻 Development

Checkout this repository and run the following commands to spin up a development server:

```
npm install
npm run serve
```

## ⁉️ Questions, Feedback & Support

Please feel free to reach out to me if you have any questions & feedback or you just need a little help to integrate the widget into your website. 

➡️ [Telegram](https://t.me/reneaaron)

## Donations

If this widget is useful for you or you just want to support development please consider a donation. [#value4value](https://twitter.com/search?q=%23value4value&src=typed_query)

⚡ reneaaron@getalby.com
