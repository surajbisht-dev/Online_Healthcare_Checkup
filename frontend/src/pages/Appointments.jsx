import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* doctor details */}
        <div classname='flex flex-col sm:flex-row gap-4'>
          <div>
            <img rc={docInfo.image} alt="" />
          </dicv>
          <div>
            {/* doc info, name, degree, experience */}
            <p>
              {docInfo.name}
              <img src="{assets.verified_icon}" alt="" />
            </p>
            <div>
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>
            {/* Doctor About */}
            <div>
              <p>
                About <img src="{assets.info_icon}" alt="" />
                <p>{docInfo.about}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointments;
