window.watsonAssistantChatOptions = {
  integrationID: "0db64e36-dd73-426a-ac43-f589d52c31bf", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "096c37aa-8126-42e2-956e-6573fe01fbd0", // The ID of your service instance.
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
const t=document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
document.head.appendChild(t);
});