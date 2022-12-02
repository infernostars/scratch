(function(Scratch) {
    'use strict';
    class LocalStorageExt {
      getInfo () {
        return {
            id: "localstorageextension",
            name: "Local Storage",
            blocks: [
                {
                    opcode: 'lse_load_reporter',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get key [key]',
                    arguments: {
                        key: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'example'
                        }
                    }
                },
                {
                    opcode: 'lse_set_block',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set key [key] to [value]',
                    arguments: {
                        key: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'example'
                        },
                        value: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: '1234'
                        }
                    },
                }
            ]
        };
      }
      lse_set_block(args){
          localStorage.setItem("lse:" + args.key.toString(), args.value.toString());
      };
      lse_load_reporter(args){
          try{
            return localStorage.getItem("lse:" + args.key.toString()).toString();
          }
          catch{
            return "";
          }
      };
    }
    Scratch.extensions.register(new LocalStorageExt());
  })(Scratch);