console.clear()
const fs = require('fs');
const fetch = require('node-fetch');
async function main() {
    for (var i = 1; i > 0; i++) {
        var req = await fetch('https://public.freeproxyapi.com/api/Proxy/Mini')
        var body = await req.json()
        var infos = (`${body.host}:${body.port}\n`)
        console.log(`Scraped ${body.type} proxie : ${infos}`)
        fs.writeFileSync('scrap.txt', infos, {
                flag: 'a+'
        })
    }
}
main()