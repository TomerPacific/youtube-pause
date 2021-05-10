const DIALOG_NODE_NAME = "TP-YT-PAPER-DIALOG";

function pressOnOkBtnInsideDialog(dialog) {
    let okBtn = dialog.querySelector('[aria-label="Yes"]');
    if (okBtn) {
        okBtn.click();
    }
}

let observer = new MutationObserver(mutations => {
    for(let mutation of mutations) {
         for(let addedNode of mutation.addedNodes) {
             if (addedNode.nodeName === DIALOG_NODE_NAME) {
                pressOnOkBtnInsideDialog(addedNode);
             }
          }
     }
 });

 observer.observe(document, { childList: true, subtree: true });
