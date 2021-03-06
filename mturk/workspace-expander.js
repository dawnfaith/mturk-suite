/* globals storage scriptEnabled */

(async function () {
  const enabled = await scriptEnabled(`workspaceExpander`)
  if (!enabled) return

  const workspace = document.getElementsByClassName(`task-question-iframe-container`)[0] || document.getElementById(`hit-wrapper`)
  workspace.style.height = `100vh`
  workspace.children[0].focus()
  workspace.scrollIntoView()

  if (storage.scripts.hitDetailsSticky) {
    const detailBar = document.getElementsByClassName(`project-detail-bar`)[0]
    window.scrollBy(0, -Math.abs(detailBar.offsetHeight))
  }
})()
