/*
窄屏菜单，以及首页那颗演示用的 PTT。
按住只给电台面板加上 tx，让字从 RX 变成 TX。不连服务器，也不发声。

index.html 底部引入：
  <script src="assets/site.js" defer></script>
*/

const topBar = document.querySelector(".top")
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")

menu.addEventListener("click", () => {
  const open = topBar.classList.toggle("open")       // 展开或收起页内链接
  menu.setAttribute("aria-expanded", String(open))    // 让读屏知道菜单开了没有
})

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    topBar.classList.remove("open")                   // 点完一项就把菜单收起来
    menu.setAttribute("aria-expanded", "false")
  })
})

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return                  // 只处理退出
  topBar.classList.remove("open")
  menu.setAttribute("aria-expanded", "false")
})

const rig = document.querySelector("[data-rig]")
const ptt = rig.querySelector(".ptt")

function hold(on) {
  rig.classList.toggle("tx", on)                      // 面板样式跟着按住走
  ptt.setAttribute("aria-pressed", String(on))        // 读屏能听到按下和松开
}

ptt.addEventListener("pointerdown", (event) => {
  event.preventDefault()                              // 免得长按选中文字或把页面拖走
  ptt.focus()
  ptt.setPointerCapture(event.pointerId)              // 手指移出按钮也还能收到松开
  hold(true)
})

ptt.addEventListener("pointerup", () => hold(false))
ptt.addEventListener("pointercancel", () => hold(false))
ptt.addEventListener("lostpointercapture", () => hold(false))

ptt.addEventListener("keydown", (event) => {
  if (event.key !== " " && event.key !== "Enter") return
  event.preventDefault()                              // 空格本来会滚动页面
  if (event.repeat) return                            // 按住不放时键盘会连发，状态保持即可
  hold(true)
})

ptt.addEventListener("keyup", (event) => {
  if (event.key === " " || event.key === "Enter") hold(false)
})

ptt.addEventListener("blur", () => hold(false))       // 焦点离开就回到接收
