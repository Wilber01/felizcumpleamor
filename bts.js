// Define un array de tus propios textos personalizados
var customTexts = [
    {
      topic: "El mapa",
      image: "media/mapav1.png",
      text: "",
      image2: ""
    },
    {
      topic: "Nada",
      image: "media/mariengenshi.png",
      text: "",
      image2: ""
    },
  ];
  
  var selectedTopicIndex = 0;
  
  // Función para actualizar el texto personalizado
  function updateCustomText() {
    var customTopicElement = document.getElementById("custom-topic");
    var customTextElement = document.getElementById("custom-text-content");
    var customImageElement = document.getElementById("custom-image");
    var customImageElement2 = document.getElementById("custom-image1");
  
    var selectedTopic = customTexts[selectedTopicIndex];
  
    customTopicElement.textContent = selectedTopic.topic;
    customTextElement.textContent = selectedTopic.text;
    customImageElement.src = selectedTopic.image;
    customImageElement.alt = "Imagen " + selectedTopic.topic;
    customImageElement2.src = selectedTopic.image2;
    customImageElement2.alt = "Imagen " + selectedTopic.topic;
  }
  
  // Maneja el clic en el botón de flecha anterior
  document.getElementById("prev-topic").addEventListener("click", function () {
    if (selectedTopicIndex > 0) {
      selectedTopicIndex--;
    } else {
      selectedTopicIndex = customTexts.length - 1;
    }
  
    updateCustomText();
  });
  
  // Maneja el clic en el botón de flecha siguiente
  document.getElementById("next-topic").addEventListener("click", function () {
    if (selectedTopicIndex < customTexts.length - 1) {
      selectedTopicIndex++;
    } else {
      selectedTopicIndex = 0;
    }
  
    updateCustomText();
  });
  
  // Inicializa el texto personalizado con el primer tema
  updateCustomText();
  