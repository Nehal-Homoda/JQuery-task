


$("button").click(function()
{
    var copyBox=$("<div> </div>");
    var done=$("<button > Done</button>");
    var deleteButton=$("<button> Delete </button>");
    var position=$(".position");

     
    copyBox.css({ 
         width: "320px",
        height: "20px",
        border:" 2px solid",
        borderRadius: "16px",
        bordercolor: "rgba(0, 0, 0, 0.363)",
        backgroundColor: "antiquewhite",
        display:"inline-block"
    });

    position.append(copyBox);
    position.append(done);
    position.append(deleteButton);
    
     copyBox.append($("input").val());
    done.addClass("done");
    deleteButton.addClass("delete");
    

    $(".done").click(function()
    {
      copyBox.css({ backgroundColor: "rgba(255, 0, 0, 0.664)"});
      done.css({ backgroundColor: "rgba(255, 0, 0, 0.664)"});
      deleteButton.css({ backgroundColor: "rgba(255, 0, 0, 0.664)"});
    }
    );
    
    $(".delete").click(function()
    {
        copyBox.remove();
        done.remove();
        deleteButton.remove();

    }
    );
    


}
);
