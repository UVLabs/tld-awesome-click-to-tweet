(function() {
  tinymce.PluginManager.add('tld_actt_button', function( editor, url ) {
    editor.addButton( 'tld_actt_button', {
      title: 'Awesome Click To Tweet',
      icon: 'icon dashicons-twitter',
      onclick: function() {
        editor.windowManager.open( {
          title: 'Awesome Click To Tweet',
          width: 700,
          minHeight: 450,
          body: [{
            type: 'textbox',
            multiline: 'true',
            name: 'mask',
            label: 'Tweet mask'
          },
          {
            type: 'textbox',
            multiline: 'true',
            name: 'tweet',
            label: 'Tweet'
          },
          {
            type: 'textbox',
            multiline: 'true',
            name: 'btntext',
            label: 'Tweet button text'
          },
          {
            type: 'textbox',
            name: 'duration',
            label: 'Animation Duration'
          },
          {
            type: 'textbox',
            name: 'delay',
            label: 'Animation Delay'
          },
          {
            type: 'listbox',
            name: 'mfont',
            label: 'Tweet mask font',
            'values': [
              {text: 'Lobster Two', value: 'lobster-two'},
              {text: 'Raleway', value: 'raleway'},
              {text: 'Titillium Web', value: 'titillium-web'},
              {text: 'Indie Flower', value: 'indie-flower'},
              {text: 'Poiret One', value: 'poiret-one'}
            ]
          },
          {
            type: 'listbox',
            name: 'anim',
            label: 'Animation',
            'values': [
              {text: 'None', value: 'none'},
              {text: 'Pulse', value: 'pulse'},
              {text: 'Tada', value: 'tada'},
              {text: 'Bounce', value: 'bounce'}
            ]
          },
          {
            type: 'listbox',
            name: 'template',
            label: 'Template',
            'values': [
              {text: 'Dashed', value: 'dashed'},
              {text: 'Big Button', value: 'bbutton'},
              {text: 'Minimalist', value: ''},
            ]
          }],
          onsubmit: function( e ) {
            editor.insertContent( '[actt' + ' mask="' + e.data.mask + '"' + ' tweet="' + e.data.tweet + '"' + ' btn-text="' + e.data.btntext + '"' + ' duration="' + e.data.duration + '"' + ' delay="' + e.data.delay + '"' + ' font="' + e.data.mfont + '"' + ' anim="' + e.data.anim + '"' + ' template="' + e.data.template + '"' + ']');
          }
        });
      }
    });
  });
})();
