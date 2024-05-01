import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/500px.png";
import "./pricing.css";
export default function Pricing() {
  return (
    <>
      <div className="pricing-container container-fluid">
        <div className="row w-100">
          <div className="col-lg-12 p-0 w-100">
            <div className="row navbar pt-4" style={{ height: "12%" }}>
              <div className="col-lg-12 d-flex justify-content-center align-items-center">
                <Link href={"/login"}>
                  <Image src={logo} alt="logo" height={50} width={50}></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 w-100">
          <div className="col-lg-12 p-0 w-100">
            <div className="header-text d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center text-white">
                Start For Free, <br /> Upgrade To Unlock More Features.
              </h1>
            </div>
          </div>
        </div>

        <div className="pricing-row">
          <div className="pricing-card free">
            <span className="m-0 p-0 plan-name">Free</span>
            <span className="m-0 p-0 price">$0</span>
            <small className="m-0 p-0 small">Forever</small>
            <div className="mt-3 d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>For Individuals</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>5 Posts/month</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>1 Fine-Tuned Model</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-times"></span>
              <p>Automated Posting</p>
            </div>
            <button className="btn btn-dark">Get Started</button>
          </div>
          <div className="pricing-card mini">
            <span className="m-0 p-0 plan-name">Mini</span>
            <span className="m-0 p-0 price">
              $9
              <small className="fs-5" style={{ color: "#999" }}>
                /month
              </small>{" "}
            </span>
            <small className="m-0 p-0 small">Per Month</small>
            <div className="mt-3 d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>For Small Teams</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>25 Posts/month</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>5 Fine-Tuned Model</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Automated Posting</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Customer Support</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-times"></span>
              <p>Post Scheduling</p>
            </div>
            <button className="btn btn-dark">Get Started</button>
          </div>
          <div className="pricing-card pro">
            <span className="m-0 p-0 plan-name">Pro</span>
            <span className="m-0 p-0 price">
              $30
              <small className="fs-5" style={{ color: "#999" }}>
                /month
              </small>{" "}
            </span>
            <small className="m-0 p-0 small">Forever</small>
            <div className="mt-3 d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>For Larger Teams</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>50 Posts/month</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Image Generation </p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>10 Fine-Tuned Model</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Automated Posting</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Post Scheduling</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Customer Support</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-times"></span>
              <p>Custom Plan</p>
            </div>

            <button className="btn btn-dark">Get Started</button>
          </div>
          <div className="pricing-card pro-max">
            <span className="m-0 p-0 plan-name">Pro Max</span>
            <span className="m-0 p-0 price">Custom</span>
            <small className="mt-2 p-0 small">Annual Billing</small>
            <div className="mt-3 d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>For Enterprises</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Custom Count of Posts</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Unlimited Image Generation </p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Custom Number of Models</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Automated Posting</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Advanced Post Scheduling</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Dedicated Customer Support</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Fully Customized Plan</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Advanced API Control</p>
            </div>
            <div className=" d-flex gap-2 justify-content-start pricing-feature">
              <span className="pi pi-check"></span>
              <p>Dedicated Support</p>
            </div>
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
