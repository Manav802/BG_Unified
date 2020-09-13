window.watsonAssistantChatOptions = {
    integrationID: "094470f4-bbc5-405b-a348-fb7f2d25dee2", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "a9e348ca-f848-400f-be29-9b8b7e5ef613", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});