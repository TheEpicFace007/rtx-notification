const fetch = require("node-fetch")
const desknotify = require("desknotify")
const opn = require("opn")
const debug = true

let interval = setInterval(function()
    {
        fetch("https://api-prod.nvidia.com/direct-sales-shop/DR/products/en_gb/GBP/5438792800")
            .then(res => res.json())
            .then(res =>
                {
                    if (res.products.product[0].inventoryStatus.status == "PRODUCT_INVENTORY_OUT_OF_STOCK")
                        console.log("The GPU is still out of stock - not notifying you yet")
                    else
                        {

                            desknotify.notify({
                                title: "Nvidia RTX 3080 Avalaibility",
                                message: "The Nvidia RTX 3080 is availaible!",
                                icon: "./notify-icon.png"
                            })
                            .then(click => 
                                {
                                    opn("https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3080/?nvid=nv-int-gfhm-16543");
                                    clearInterval(interval);
                                });
                        }
                })

    }, 10_000)


desknotify.notify({
    title: "Nvidia RTX 3080 Avalaibility",
    message: "he Nvidia RTX 3080 is availaible!",
    icon: "./notify-icon.png"
}).then(click => opn("https://www.google.com"))