# Diawi Plugin

<img src="https://cdn.rawgit.com/clarive/cla-diawi-plugin/master/public/icon/diawi.svg?sanitize=true" alt="Diawi Plugin" title="Diawi Plugin" width="120" height="120">

The Diawi plugin will allow you to upload iOS and Android apps (.ipa, .apk, .zip) to Diawi from Clarive in an automated way.

## What is Diawi

Diawi is a tool for developers to deploy developments and applications directly to the devices.

## Installing

To install the plugin, place the `cla-diawi-plugin` folder inside `$CLARIVE_BASE/plugins` directory in the Clarive
instance.

### Upload Diawi App

The parameters available are:

- **Token (token)** - Token to access to Diawi taken from your Diawi user preferences.
- **File Path (file_path)** - Full path to the application file.
- **Diawi Parameters (diawi_args)** - You can add custom parameters for the Diawi API. You can find them at Diawi website.

## How to use

### In Clarive EE

Once the plugin is placed in its folder, you can find this service in the palette in the section of generic service and can be used like any other palette op.

Op Name: **Upload Diawi App**

Example:

```yaml
      Token: apedikeksileshfi
      File Path: ${CLARIVE_BASE}/file.ipa
      Diawi Parameters: 
        comment=My first tab
        callback_emails=me@clarive.com
``` 

### In Clarive SE

#### Rulebook

If you want to use the plugin through the Rulebook, in any `do` block, use this ops as examples to configure the different parameters:

```yaml
rule: Diawi demo
do:
   - diawi_upload:
      token: 'apedikeksileshfi'               # Required
      file_path: '${CLARIVE_BASE}/file.ipa'   # Required
      diawi_args: ['comment=My first tab', 'callback_emails=me@clarive.com']
```

##### Outputs

###### Success

The plugin will return the Request output.

###### Possible configuration failures

**Upload failed**

The service will return the output from the Diawi API.

**Variable required**

```yaml
Error in rulebook (compile): Required argument(s) missing for op "diawi_upload": "token"
```

Make sure you have all required variables defined.

**Not allowed variable**

```yaml
Error in rulebook (compile): Argument `Token` not available for op "diawi_upload"
```

Make sure you are using the correct paramaters (make sure you are writing the variable names correctly).

## More questions?

Feel free to join **[Clarive Community](https://community.clarive.com/)** to resolve any of your doubts.