var reg = require("cla/reg");

reg.register('service.diawi.task', {
    name: _('Upload App to Diawi'),
    icon: '/plugin/cla-diawi-plugin/icon/diawi.svg',
    form: '/plugin/cla-diawi-plugin/form/diawi-form.js',
    rulebook: {
        moniker: 'diawi_upload',
        description: _('Uploads apps to Diawi'),
        required: ['file_path', 'token'],
        allow: [ 'file_path', 'token', 'diawi_args'],
        mapper: {
            'file_path':'filePath',
            'diawi_args':'diawiArgs'
        },
        examples: [{
            diawi_upload: {
                token: 'apedikeksileshfi',
                file_path: '${CLARIVE_BASE}/file.ipa',
                diawi_args: ['comment=My first tab', 'callback_emails=me@clarive.com']
            }
        }]
    },
    handler: function(ctx, config) {

        var log = require("cla/log");
        var reg = require("cla/reg");

        var token = config.token || '';
        var filePath = config.filePath || '';
        var diawiArgs = config.diawiArgs || [];
        var customParams;

        var headers = {
            "Content-Type": "multipart/form-data"
        };
        var urlDiawi = 'https://upload.diawi.com?token=' + token;
        if (diawiArgs) {
            customParams = diawiArgs.join("&");
            urlDiawi = urlDiawi + '&' + customParams;
        };
        var body = 'file : ' + filePath;

        var output = reg.launch('service.web.request', {
            name: _('Post to Diawi'),
            config: {
                method: 'POST',
                url: urlDiawi,
                headers: headers,
                body: body
            }
        });
        log.info(_("App uploaded correctly: "), output.content);
        return output.content;
    }
});