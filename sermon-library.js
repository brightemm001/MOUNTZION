const mediaItems=[
  {title:'Congregational Praise',category:'praise',slug:'congregational-praise',file:'snapchat-1027629946',orientation:'portrait',poster:'assets/revival.jpg'},
  {title:'Message and Worship Gathering',category:'sermon',slug:'message-and-worship-gathering',file:'snapchat-1064336017',orientation:'portrait',poster:'assets/pastor-preaching.jpg'},
  {title:'A Moment at the Pulpit',category:'sermon',slug:'moment-at-the-pulpit',file:'snapchat-1064893059',orientation:'portrait',poster:'assets/pastor-preaching.jpg'},
  {title:'Ministry Gathering',category:'gathering',slug:'ministry-gathering',file:'snapchat-1102491030',orientation:'portrait',poster:'assets/prayer-gathering.jpg'},
  {title:'Prayer and Ministration',category:'prayer',slug:'prayer-and-ministration',file:'snapchat-1107183813',orientation:'portrait',poster:'assets/prayer-gathering.jpg'},
  {title:'Congregational Prayer Gathering',category:'prayer',slug:'congregational-prayer-gathering',file:'snapchat-1162840322',orientation:'portrait',poster:'assets/prayer-gathering.jpg'},
  {title:'Women in Praise',category:'praise',slug:'women-in-praise',file:'snapchat-1742741441',orientation:'portrait',poster:'assets/womens-ministry.jpg'},
  {title:'Message from the Pulpit',category:'sermon',slug:'message-from-the-pulpit',file:'snapchat-1935443578',orientation:'portrait',poster:'assets/pastor-preaching.jpg'},
  {title:'Prayer and Ministration',category:'prayer',slug:'prayer-service-clip',file:'snapchat-2052578544',orientation:'portrait',poster:'assets/prayer-gathering.jpg'},
  {title:'Church Gathering',category:'gathering',slug:'church-gathering',file:'snapchat-567197068',orientation:'portrait',poster:'assets/city-of-prayer.jpg'},
  {title:'Service Message and Congregational Response',category:'sermon',slug:'service-message-and-response',file:'vid-20260920-wa0005',orientation:'portrait',poster:'assets/pastor-preaching.jpg'},
  {title:'Outdoor Praise Gathering',category:'praise',slug:'outdoor-praise-gathering',file:'vid_20260315_174121',orientation:'portrait',poster:'assets/revival.jpg'}
];
const categoryNames={prayer:'Prayer',sermon:'Sermon',praise:'Praise',gathering:'Church moment'};
const library=document.getElementById('sermon-library');
const status=document.getElementById('media-filter-status');
function renderMedia(filter='all'){
  const visible=mediaItems.filter(item=>filter==='all'||item.category===filter);
  library.replaceChildren(...visible.map(item=>{
    const card=document.createElement('article');card.className='card media-card';
    const video=document.createElement('video');video.controls=true;video.preload='none';video.playsInline=true;video.className=`media-video ${item.orientation}`;video.poster=item.poster;video.setAttribute('aria-label',`${item.title} video`);
    const source=document.createElement('source');source.src=`media/sermons/${item.file}.mp4`;source.type='video/mp4';video.append(source,document.createTextNode('Your browser does not support video playback.'));
    const type=document.createElement('span');type.className='eyeline media-type';type.textContent=categoryNames[item.category];
    const heading=document.createElement('h3');heading.textContent=item.title;
    const downloads=document.createElement('div');downloads.className='media-downloads';
    for(const ext of ['mp3','mp4']){const link=document.createElement('a');link.className='text-link';link.href=`media/sermons/${item.file}.${ext}`;link.download=`mount-zion-${item.slug}.${ext}`;link.textContent=`Download ${ext.toUpperCase()} ↓`;downloads.append(link)}
    card.append(video,type,heading,downloads);return card
  }));
  status.textContent=filter==='all'?`Showing all ${visible.length} videos.`:`Showing ${visible.length} ${categoryNames[filter].toLowerCase()} ${visible.length===1?'video':'videos'}.`;
}
document.querySelectorAll('[data-video-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.videoFilter;document.querySelectorAll('[data-video-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});renderMedia(filter)}));
renderMedia();
