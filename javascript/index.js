$("#btnSend").click(function ()
{
    useAPI();
  });
    //retorna dados da api
    function useAPI() {
    const data = $("#date").val();
  
    
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=yIvc5SJRvBfiStShBj7FvM1UWme8alglgrpaV9LH&date=${data}`,
        success: function (data) {
          
        $("#texto").html(" ")
        apiData(data);
  
        }, error: function () {
            $("#texto").html("Error. Enter a valid date!")
      }
      
    })
  
    
    function apiData(procura) {
        const imagem = $("#mediaAPI");
        const titulo = $("#title");
        const explicacao = $("#contentP");
        const autor = $("#autorP")
        
  
        titulo.html(procura.title);
        explicacao.html(`<strong>Explanation:</strong> ${procura.explanation}`);
        autor.html(`<strong>Copyright:</strong> ${procura.copyright}`);

        
  
      if (procura.media_type == 'image') {
        imagem.html(`<img class="img" src="${procura.url}"/>`)
      } else {
        imagem.html(`<iframe class="img" src="${procura.url}?autoplay=1&mute=1"></iframe>`)
      }
    }
    
  }