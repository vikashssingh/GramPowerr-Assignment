import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import StoreList from "./components/StoreList";
import ViewStore from "./components/ViewStore";
import AddButton from "./components/AddStore";
import NewStoreForm from "./components/NewStoreForm";

const StoreListContext = createContext();
const SetStoreListContext = createContext();

function App() {
  const [storeDetails, setStoreDetails] = useState(
    JSON.parse(localStorage.getItem("storeDetails")) || {}
  );
  const [storeList, setStoreList] = useState(
    JSON.parse(localStorage.getItem("storeList")) || [
      {
        id: 0,
        title: "Sample Store 1",
        storeHrs: {
          from: "11:30",
          to: "12:00"
        },
        location: "Jaipur, Jaipur, Jaipur - 444666",
        about:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor similique sit ullam cumque, commodi tempore consequatur facilis velit aspernatur! Laborum, sint nesciunt. Dolorum, saepe eaque dolor quisquam at aperiam repellat.",
        cover:
          "https://img.freepik.com/premium-psd/winter-fashion-sale-facebook-cover-template-social-media-web-banner-design_624853-86.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741",
        galleryImg1:
          "https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741://previews.123rf.com/images/kho/kho1305/kho130500329/19758746-beautiful-happy-teen-girls-with-colored-shopping-sale-bags-over-white.jpg",
        galleryImg2:
          "https://https://img.freepik.com/free-psd/summer-special-fashion-sale-web-banner-template_120329-1506.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.shutterstock.com/image-photo/picture-shocked-young-brunette-woman-260nw-641814016.jpg",
        galleryImg3:
          "https://media.istockphoto.com/https://img.freepik.com/free-psd/summer-fashion-sale-web-banner-template_120329-1505.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?k=20&m=1193750118&s=612x612&w=0&h=w46Bjw0TuNVSKHOWtMyVIRfvzZ2JSRP4w7Zm02oqCFE=",
        categories: {
          category1: "category1",
          category2: "category2",
          category3: "category3"
        }
      },
      {
        id: 1,
        title: "Sample Store 2",
        storeHrs: {
          from: "11:30",
          to: "12:00"
        },
        location: "Jaipur, Jaipur, Jaipur - 444666",
        about:
          " ipsum, dolor sit amet consectetur adipisicing elit. Dolor similique sit ullam cumque, commodi tempore consequatur facilis velit aspernatur! Laborum, sint nesciunt. Dolorum, saepe eaque dolor quisquam at aperiam repellat.",
        cover:
          "https://img.freepik.com/premium-psd/winter-fashion-sale-facebook-cover-template-social-media-web-banner-design_624853-86.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741",
        galleryImg1:
          "https://https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.123rf.com/images/kho/kho1305/kho130500329/19758746-beautiful-happy-teen-girls-with-colored-shopping-sale-bags-over-white.jpg",
        galleryImg2:
          "https://https://img.freepik.com/free-psd/summer-special-fashion-sale-web-banner-template_120329-1506.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.shutterstock.com/image-photo/picture-shocked-young-brunette-woman-260nw-641814016.jpg",
        galleryImg3:
          "https://media.https://img.freepik.com/free-psd/summer-fashion-sale-web-banner-template_120329-1505.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?k=20&m=1193750118&s=612x612&w=0&h=w46Bjw0TuNVSKHOWtMyVIRfvzZ2JSRP4w7Zm02oqCFE=",
        categories: {
          category1: "category1",
          category2: "category2",
          category3: "category3"
        }
      },
      {
        id: 2,
        title: "Sample Store 3",
        storeHrs: {
          from: "11:30",
          to: "12:00"
        },
        location: "Jaipur, Jaipur, Jaipur - 444666",
        about:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor similique sit ullam cumque, commodi tempore consequatur facilis velit aspernatur! Laborum, sint nesciunt. Dolorum, saepe eaque dolor quisquam at aperiam repellat.",
        cover:
          "https://img.freepik.com/premium-psd/winter-fashion-sale-facebook-cover-template-social-media-web-banner-design_624853-86.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741",
        galleryImg1:
          "https://https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.123rf.com/images/kho/kho1305/kho130500329/19758746-beautiful-happy-teen-girls-with-colored-shopping-sale-bags-over-white.jpg",
        galleryImg2:
          "https://image.https://img.freepik.com/free-psd/summer-special-fashion-sale-web-banner-template_120329-1506.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.com/image-photo/picture-shocked-young-brunette-woman-260nw-641814016.jpg",
        galleryImg3:
          "https://media.https://img.freepik.com/free-psd/summer-fashion-sale-web-banner-template_120329-1505.jpg?size=626&ext=jpg&ga=GA1.2.1471637075.1659092741.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?k=20&m=1193750118&s=612x612&w=0&h=w46Bjw0TuNVSKHOWtMyVIRfvzZ2JSRP4w7Zm02oqCFE=",
        categories: {
          category1: "category1",
          category2: "category2",
          category3: "category3"
        }
      }
    ]
  );
  return (
    <BrowserRouter>
      <StoreListContext.Provider value={storeList}>
        <SetStoreListContext.Provider value={setStoreList}>
          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <StoreList setStoreDetails={setStoreDetails} />
                    <AddButton />
                  </>
                }
              />
              <Route
                path="/ViewStore"
                element={
                  <>
                    <ViewStore storeDetails={storeDetails} />
                  </>
                }
              />
              <Route path="/AddNewStore" element={<NewStoreForm />} />
            </Routes>
          </main>
        </SetStoreListContext.Provider>
      </StoreListContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { StoreListContext };
export { SetStoreListContext };
