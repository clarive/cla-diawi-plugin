# Diawi Plugin

The Diawi plugin will allow you to upload iOS and Android apps (.ipa, .apk, .zip) to Diawi from Clarive in an automated way.

## What is Diawi

Diawi is a tool for developers to deploy developments and applications directly to the devices.

## Installing

To install the plugin, place the `cla-diawi-plugin` folder inside `$CLARIVE_BASE/plugins` directory in the Clarive
instance.

## How to Use

Once the plugin is placed in its folder, you can start using it by going to your Clarive instance.

After restarting your Clarive instance, you will have a new palette service called 'Upload App to Diawi'.

### Upload Diawi App

The parameters available for this service are:

- **Server** - The Generic Server Resource where the file to be uploaded is located.
- **Token** - Token to access to Diawi taken from your Diawi user preferences.
- **File Path** - Path where the file to be uploaded to the Diawi tool is located.
- **Diawi Parameters** - Table where you can add custom commands you want. These commands are available in the Daiwi API.
- **Errors and Output** - These two fields deal with managing control errors. The options are:
   - **Fail and Output Error** - Search for the configured error pattern in the script output. If found, an error
     message is displayed in the monitor showing the match.
   - **Warning and Output warning** - Search for configured warning pattern in script output. If found, an error message
     is displayed in the monitor showing the match.
   - **Custom** - If the Errors combo is set to custom, a new form is displayed to define the behavior with the
     following fields:
   - **Ok** - Range of return code values for the script to have succeeded. No message will be displayed in the monitor.
   - **Warn** - Range of return code values to warn the user. A warning will be displayed in the monitor.
   - **Error** - Range of return code values for the script to have failed. An error message will be displayed in the
     monitor.

The plugin will return the Request output.

Configuration example:

      Server: Development Server
      Token: apedikeksileshfi
      File Path: ${CLARIVE_BASE}/file.ipa
      Diawi Parameters: 
        comment=My first tab
        callback_emails=me@clarive.com

