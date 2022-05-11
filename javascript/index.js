//key: yIvc5SJRvBfiStShBj7FvM1UWme8alglgrpaV9LH


$("#btnSend").click(function ()
//button function 
{
    useAPI();
  });
    //return: API date
    function useAPI() {
        const data = $("#date").val();
        // save input dates
  
    //ajax method
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=yIvc5SJRvBfiStShBj7FvM1UWme8alglgrpaV9LH&date=${data}`,
        
        //positive request:
        success: function (data) {
          
        $("#texto").html(" ")
            apiData(data);
        },
        

        //negative request:
        error: function () {
            $("#texto").html("Error. Enter a valid date! <br> From June 16, 1995 to the present day!")
            $("#date").css('border', '1px solid red')
            $("#mediaAPI").hide()
            $("#autorP").hide()
            $("#title").hide()
            $("#contentP").hide()
      }
      
    })
  
    //get data from API
    //use const for ID's by HTML
    function apiData(procura) {
        const imagem = $("#mediaAPI");
        const titulo = $("#title");
        const explicacao = $("#contentP");
        const autor = $("#autorP")
        
        
        //looking in the APOD API

        titulo.html(procura.title);
        explicacao.html(`<strong>Explanation:</strong> ${procura.explanation}`);
        autor.html(`<strong>Copyright:</strong> ${procura.copyright}`);

        //to select between video or image
        //insert autoplay for video
  
      if (procura.media_type == 'image') {
        imagem.html(`<img class="img" src="${procura.url}"/>`)
      } else {
        imagem.html(`<iframe class="img" src="${procura.url}?autoplay=1&mute=1"></iframe>`)
      }
    }
    
}
  
// the <iframe> tag specifies an inline frame. 