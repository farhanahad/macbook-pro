const eightGBMemory = document.getElementById('eight-gb-memory')
const sixteenGBMemory = document.getElementById('sixteen-gb-memory')
const storage256GB = document.getElementById('256GB-storage')
const storage512GB = document.getElementById('512GB-storage')
const storage1TB = document.getElementById('1TB-storage')
const deliveryCost = document.getElementById('delivery-charge')
const freeDelivery = document.getElementById('free-delivery')
const paidDelivery = document.getElementById('paid-delivery')
const total = document.getElementById('total')
const macBookPrice = document.getElementById('best-price')
const memoryCost = document.getElementById('extra-memory-cost')
const storageCost = document.getElementById('extra-storage-cost')
const promoInput = document.getElementById('promo-input')
const promoBtn = document.getElementById('promo-button')
const discountPriceText = document.getElementById('total-after-promo-code')


eightGBMemory.addEventListener('click', function () {
    memoryCost.innerText = '0'
    updateTotal()
})
sixteenGBMemory.addEventListener('click', function () {
    memoryCost.innerText = '180'
    updateTotal()
})

storage256GB.addEventListener('click', function () {
    storageCost.innerText = '0'
    updateTotal()
})
storage512GB.addEventListener('click', function () {
    storageCost.innerText = '100'
    updateTotal()
})
storage1TB.addEventListener('click', function () {
    storageCost.innerText = '180'
    updateTotal()
})

freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0'
    updateTotal()
})
paidDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20'
    updateTotal()
})
function updateTotal() {
    const bestPrice = Number(macBookPrice.innerText)
    const extraMemoryCost = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText)
    const extraDeliveryCost = Number(deliveryCost.innerText)
    const grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost
    total.innerText = grandTotal
    discountPriceText.innerText = total.innerText
}
promoBtn.addEventListener('click', function () {
    let discountPrice = Number(discountPriceText.innerText)
    promoCode = promoInput.value
    if (promoCode == 'stevekaku') {
        discountPriceText.innerText = (total.innerText /100)*80
    }
    else (
        alert('you have enterd wrong promo code')
    )
    promoInput.value = ''
})