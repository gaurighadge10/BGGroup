import Layout from "../components/Layout";
import {BusinessData} from "../components/dataPages"
import CompanyPage from "../components/companyPage";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
const casventures = () => {
  return (
    <>
     <Layout title="casventures" >
       <Navbar />
     {BusinessData.map(data1=>{
        if(data1.id==4){return(
        <CompanyPage company="4" />
      )};})}
      </Layout>
      <Footer />
    </>
  );
};

export default casventures;