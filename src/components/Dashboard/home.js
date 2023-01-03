import { useRef } from "react";
import { signOutUser, dbRef, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";

import "./dashboard_home.scss";
import Loader from "react-loaders";

const Home = () => {
    const form = useRef([]);
    console.log(form);

    const submitPortfolio = (event) => {
        event.preventDefault();

        const itemName = form.current[0]?.value;
        const itemDescription = form.current[1]?.value;
        const itemURL = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        console.log(itemName, itemDescription, itemURL, image);

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image)
            .then((snapshot) => {
                console.log(snapshot.ref);
                getDownloadURL(snapshot.ref)
                    .then((downloadUrl) => {
                        console.log(downloadUrl);
                        savePortfolio(downloadUrl);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
        const savePortfolio = (imageURL) => {
            const portfolioItem = {
                itemName,
                itemDescription,
                itemURL,
                imageURL,
            };
            console.log(portfolioItem);

            addDoc(dbRef, portfolioItem)
                .then((documentRef) => {
                    console.log(
                        "Document has been uploaded successfully",
                        documentRef
                    );
                    form.current.reset();
                })
                .catch((error) => {
                    console.log(error);
                });
        };
    };

    return (
        <>
            <Loader type="line-scale" color="#fed002" width={500} />
            <div className="dashboard-home">
                <div className="form-container">
                    <form
                        className="form"
                        ref={form}
                        onSubmit={submitPortfolio}
                    >
                        <input className="input" type="text" placeholder="Name" /> <br />
                        <textarea className="input" placeholder="Description"></textarea> <br />
                        <input className="input" type="text" placeholder="URL" /> <br />
                        <input className="input-file" type="file" placeholder="Image" /> <br />
                        <button className="input-submit" type="submit">Submit</button>
                    </form>
					<div className="hr"></div>
                    <button className="input-submit" onClick={signOutUser}>Sign Out</button>
                </div>
            </div>
        </>
    );
};

export default Home;
