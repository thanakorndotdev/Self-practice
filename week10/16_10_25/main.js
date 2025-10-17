import { CookieUtil } from "./cookieUtil.js"

console.log(document.cookie)
document.cookie = `theme=dark;expires=${new Date(2025, 10, 15)}`
console.log(document.cookie)

document.cookie = "font-size=12px;max-time=32"
console.log(document.cookie)

document.cookie = "theme=dark"
document.cookie = "color=white"

console.log(document.cookie)

console.log(CookieUtil.get("theme"))
console.log(CookieUtil.get("color"))

CookieUtil.set("c.sukjairak", "Chareonwarn Sukjairak", new Date(2025, 9, 29))
console.log(CookieUtil.get("cartId"))
console.log(document.cookie)

CookieUtil.unset("color")
console.log(document.cookie)