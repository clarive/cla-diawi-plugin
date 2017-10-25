var reg = require("cla/reg");

reg.register('service.diawi.task', {
    name: _('Upload App to Diawi'),
    icon: '/plugin/cla-diawi-plugin/icon/diawi.svg',
    form: '/plugin/cla-diawi-plugin/form/diawi-form.js',
    handler: function(ctx, config) {

        var log = require("cla/log");
        var reg = require("cla/reg");
        var errors = config.errors;
        var server = config.server;
        var token = config.token || '';
        var filePath = config.filePath || '';
        var diawiArgs = config.diawiArgs || '';
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
                body: body,
            }
        });
        log.info(_("App uploaded correctly: "), output.content);
        return output.content;
    }
});