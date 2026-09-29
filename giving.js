const transferPanel=document.getElementById('transfer-panel');
const cardPanel=document.getElementById('card-panel');
const amountInput=document.getElementById('gift-amount');
const amountText=()=>{const amount=Number(amountInput.value);return amount>0?`₦${amount.toLocaleString('en-NG')}`:'a gift'};
function updateGivingLinks(){const amount=amountText();document.getElementById('request-card-link').href=`https://wa.me/2349154494093?text=${encodeURIComponent(`Hello Mount Zion. Please send me the official secure card payment link for ${amount}.`)}`;document.getElementById('confirm-transfer').href=`https://wa.me/2349154494093?text=${encodeURIComponent(`Hello Mount Zion. I have made a bank transfer of ${amount} to the Ecobank account. Please confirm receipt.`)}`}
document.querySelectorAll('[data-method]').forEach(button=>button.addEventListener('click',()=>{const isCard=button.dataset.method==='card';transferPanel.hidden=isCard;cardPanel.hidden=!isCard;document.querySelectorAll('[data-method]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});updateGivingLinks()}));
amountInput.addEventListener('input',updateGivingLinks);updateGivingLinks();
document.getElementById('copy-ecobank').addEventListener('click',async event=>{const button=event.currentTarget;try{await navigator.clipboard.writeText('2093029275');button.textContent='Copied';setTimeout(()=>button.textContent='Copy account number',1600)}catch{button.textContent='Select the account number above'}});
