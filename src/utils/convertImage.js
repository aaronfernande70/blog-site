
export const convert=(e)=> {
    var reader = new FileReader();
    let image
    reader.readAsDataURL(e);
     reader.onload = () => {
    //   contextData.setBlogImage(reader.result)
        console.log(reader.result)
        image = reader.result
    };
    // reader.onerror = error => {
    //   console.log("Error: ", error);
    // };
    console.log(image)
    // return image
  }