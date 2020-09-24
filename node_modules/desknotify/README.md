# Desknotify

![](https://img.shields.io/badge/desknotify-v1.0.0-green.svg)

Desktop notifications for Node.js as both: API and CLI (command-line interface). 

For **Windows, Mac** and obviously **Linux**.

## 1. Introduction

Basically, the purpose of this library is to provide a simple API and CLI for [`node-notifier`](https://www.npmjs.com/package/node-notifier), which already does in fact. So, this is a wrapper, and nothing genuine is found here.

## 2. Installation

To install the Desknotify module, you can just:

~$ `npm install desknotify`

If you want to use Desknotify from your command line easily, you can install it globally like:

~$ `npm install -g desknotify`

This way, you will be able to call Desknotify from your console.

## 3. Examples

#### Overview

##### Example 1

*Sending a simple desktop notification from a Node.js program:*

```js
require("desknotify").notify({
  title: "Some title",
  message: "Some message"
});
```

##### Example 2

*Sending the same notification from the command line:*

~$ `desknotify -t "Some title" -m "Some message"`


#### API examples

##### Example 1

The simplest example possible would be:

```js
require("desknotify").notify();
```

It should show a notification with the default title, message and icon.

##### Example 2

The most complex example possible would be:

```js
require("../src/desknotify.js").notify({
  title: "Remember",
  message: "This is only a wrapper!! node-notify (and other OPEN SOURCE software) is doing the hard work under the hood.",
  icon: "/path/to/icon.png"
}).then(function() {
  console.log("Notification process successful.");
}).catch(function(error) {
  console.log("Notification process with errors.");
}).finally(function() {
  console.log("Notification process finished.");
});
```

In this case, the notification will show the title and message specified, and the image of the icon will be taken from the specified path. Moreover, we are using the returned [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Promise) (by the `notify` method) to provide a callback for successful notifications, for failed notifications, and for every notification once it is closed.

#### CLI examples

##### Example 1

The simplest example possible would be:

~$ `desknotify`

But it will show the default notification (default title, message and icon).

##### Example 2

Some more complex examples would be:

~$ `desknotify --title "Title of notification" --message "Message of notification" --icon "/path/to/icon.png"`

Or abbreviated:

~$ `desknotify -t "Title of notification" -m "Message of notification" -i "/path/to/icon.png"`

## 4. Reference

#### API Reference

----

**`Desknotify = require("desknotify");`** // {Object}

This object holds all the Desknotify API. It is what you get when you import the NPM module.

----

**`Desknotify.notify(...)`** // {Function}

This is the notifier function of the API. It is the responsible of sending the desktop notifications.

----

**`Desknotify.notify(Object:details)`** // {Object:Promise}

This function should send a notification to the operative system, and the user should see it.

The available parameters are the `details`, an `{Object}` with some (or none) of the next properties:

  `title`: {String} the title of the notification.

  `message`: {String} the message of the notification.

  `icon`: {String} the path of the icon of the notification.


The `notify` function, when it is called, it will return a Promise object. This means that we can chain these methods, passing one callback to each of them:

  `then`: for successfull notifications.

  `catch`: for failed notifications.

  `finally`: for all notifications.

----

#### CLI Reference

These are the parameters available for the CLI tool:

1. `--title` or `-t`: text with the title of the notification.

2. `--message` or `-m`: text with the message of the notification.

3. `--icon` or `-i`: text with the path of the icon of the notification.

To test it, you can:

~$ `desknotify -t "Title" -m "Message"`

Or even this would work as well:

~$ `desknotify`

## 5. Conclusion

Desknotify is only a wrapper of various (lots, in fact) (nested) pieces of software.

## 6. Thanks

Thanks to all the developers that have contributed somehow for this module to be possible.# Read this file
# Read this file
# Read this file
# Read this file
