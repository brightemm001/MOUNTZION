const WA='2349154494093';
function whatsapp(text){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')}
function sendForm(event,type){event.preventDefault();const f=event.currentTarget;const name=f.elements.name.value.trim(),body=f.elements.message.value.trim();if(!name||!body)return;whatsapp(`Hello Mount Zion. I would like to share a ${type}.\n\nName: ${name}\nMessage: ${body}`)}

document.querySelectorAll('.copy-number').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);const original=button.textContent;button.textContent='Copied';setTimeout(()=>button.textContent=original,1800)}catch{button.textContent='Select the number above'}}));
