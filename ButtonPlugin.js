/*********************************************************/
/* BUTTON PLUGIN */
/*********************************************************/
/*
// Making button
this.ButtonPlugin.addButton(some_image,funtion,optional arguments);
*/
/*********************************************************/

class ButtonPlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);
        this.button_click_doing = 0;
        this.buttonplugin_record = {};
    }

    init() {
        //console.log('The plugin is alive!');
    }

    addButton(btn, f, v) {
        btn.setInteractive();
        btn.name = btn.texture.key + Phaser.Math.Between(11111, 99999);
        this.buttonplugin_record[btn.name] = { f: f, v: v };
        btn.on('pointerdown', () => this.button_click_f(btn));
    }

    button_click_f(btn) {
        if (this.button_click_doing == 1) { return; }
        this.button_click_doing = 1;
        var prop = this.buttonplugin_record[btn.name];
        var that = this;

        btn.scene.tweens.add({
            targets: btn,
            scaleX: 0.8,
            scaleY: 0.8,
            ease: 'Linear',
            duration: 100,
            yoyo: true,
            repeat: 0,
            onComplete: function () {
                that.button_click_doing = 0;
                prop.f(prop.v)
            },
        });

    }

}