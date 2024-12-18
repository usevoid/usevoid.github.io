self.__uv$config = {
    prefix: '/static/nowgg/',
    bare:'https://homes.renaca.com/fq/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
    inject: [
    {
      host: /now.gg*/,
      injectTo: "head",
      html: `<script>document.querySelectorAll("div.sc-19c21da7-0.dgAMyI").forEach(function(c){c.remove()});</script>`
    }
  ]
};
