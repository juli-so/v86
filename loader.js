// load all files to run v86 in browser, uncompiled

(function()
{
    var 
        CORE_FILES = "const.js io.js cpu.js main.js ide.js fpu.js pci.js floppy.js " +
                     "memory.js dma.js pit.js vga.js ps2.js pic.js rtc.js uart.js acpi.js hpet.js"
        BROWSER_FILES = "main.js screen.js keyboard.js mouse.js serial.js lib.js",
        LIB_FILES = "esprima.js walk.js";


    load_scripts(CORE_FILES, "src/");
    load_scripts(BROWSER_FILES, "src/browser/");
    load_scripts(LIB_FILES, "lib/");

    function load_scripts(resp, path)
    {
        var files = resp.split(" "),
            script;

        for(var i = 0; i < files.length; i++)
        {
            // this may be a bad idea, if someone tries to 
            // load this script after the document has loaded,
            // but it's necessary to ensure that scripts are 
            // loaded in order
            document.write('<script src="' + path + files[i] + '"></script>');

            //script = document.createElement("script");
            //script.src = PATH + files[i] + "?" + Math.random();
            //script.defer = "defer";
            //document.body.appendChild(script);
        }
    }
})();
