import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Contact = () => {
  return (
    <>
      <div className="about-page">
        <div className="container">
          <div className="left-side">
            <h1>
              <AnimatedLetters strArray={'Contact Me'.split('')} startIdx={1} />
            </h1>
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <input type="text" name="name" placeholder="Name"></input>
                  <input type="email" name="email" placeholder="Email"></input>
                </div>
                <div className="form-row">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div className="form-row">
                  <input type="submit" className="form-submit"></input>
                </div>
              </form>
            </div>
          </div>
          <div className="right-side">
            <div className="map-wrapper">
              <MapContainer center={[-37.9712305, 144.4913197]} zoom={11}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[-37.9712305, 144.4913197]}
                  icon={DefaultIcon}
                >
                  <Popup>It all starts with a line of Javascript!</Popup>
                </Marker>
              </MapContainer>
              <div className="map-info">
              <p>
                Working remotly <br />
                Based in Melbourne <br />
                VIC, Australia.
                <br />
                <span>xxx@outlook.com</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" color="#fed002" width={500} />
    </>
  );
};

export default Contact;
