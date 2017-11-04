(function(params) {
    var data = params.data;

    var serverComboBox = Cla.ui.ciCombo({
        name: 'server',
        class: 'generic_server',
        fieldLabel: _('Server'),
        value: data.server || '',
        allowBlank: false,
        width: 400,
        with_vars: 1
    });

    var filePath = Cla.ui.textField({
        name: 'filePath',
        fieldLabel: _('File Path'),
        value: data.filePath || '',
        allowBlank: false
    });

    var argumentsTextField = Cla.ui.arrayGrid({
        name: 'diawiArgs',
        fieldLabel: _('Diawi Parameters'),
        value: data.diawiArgs,
        description: _('Diawi Parameters'),
        default_value: '.',
    });

    var token = Cla.ui.textField({
        name: 'token',
        fieldLabel: _('Token'),
        value: data.token || '',
        allowBlank: false
    });

    var panel = Cla.ui.panel({
        layout: 'form',
        items: [
            serverComboBox,
            token,
            filePath,
            argumentsTextField
        ]
    });


    return panel;
})