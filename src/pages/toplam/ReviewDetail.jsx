import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { toast } from "react-toastify";
import { comment } from "postcss";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ReviewDetail = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [reviews, setReviews] = useState([
    {
      name: "Alice",
      rating: 4,
      comment: "Great product!",
      email: "alice@gmail.com",
    },
    {
      name: "Bob",
      rating: 3.5,
      comment: "Could be better.",
      email: "bob@gmail.com",
    },
    {
      name: "Alice",
      rating: 4,
      comment: "Great product!",
      email: "alice@gmail.com",
    },
    {
      name: "Bob",
      rating: 3.5,
      comment: "Could be better.",
      email: "bob@gmail.com",
    },
    {
      name: "Alice",
      rating: 4,
      comment: "Great product!",
      email: "alice@gmail.com",
    },
    {
      name: "Bob",
      rating: 3.5,
      comment: "Could be better.",
      email: "bob@gmail.com",
    },
  ]);

  let reviewcomment = reviews.slice(0, 3);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...formData, rating: value };
    setReviews((prev) => [newReview, ...prev]); // Add new review to the top
    toast.success("Sharh qoldirildi!");
    setFormData({ name: "", email: "", comment: "" }); // Clear form
    setValue(3); // Reset rating
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-auto mb-20 md:w-1/2"
        >
          <span>{t('detail_rate')}: </span>
          <Box
            sx={{ width: 200, display: "flex", alignItems: "center", mb: 2 }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => setValue(newValue)}
              onChangeActive={(event, newHover) => setHover(newHover)}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
          <div className="mb-2">
            <label>{t("detail_name")}:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-100 w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label>{t("detail_email")}:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label>{t("detail_comment")}:</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="bg-gray-100 w-full p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            {t("detail_submit")}
          </button>
        </form>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-2xl">{t("Reviews")}</h3>
        {isOpen
          ? reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-300 mb-2 pb-2">
                <p className="font-semibold text-xl">
                  {review.name} |{" "}
                  <span className="text-slate-400 text-sm">
                    {review.email}
                  </span>
                </p>
                <Rating value={review.rating} readOnly precision={0.5} />
                <p>{review.comment}</p>
              </div>
            ))
          : reviewcomment.map((review, index) => (
              <div key={index} className="border-b border-gray-300 mb-2 pb-2">
                <p className="font-semibold text-xl">
                  {review.name} |{" "}
                  <span className="text-slate-400 text-sm">
                    {review.email}
                  </span>
                </p>
                <Rating value={review.rating} readOnly precision={0.5} />
                <p>{review.comment}</p>
              </div>
            ))}
            <p className={`${!isOpen ? 'block' : 'hidden'} cursor-pointer hover:text-indigo-500`} onClick={handleOpen}>See more ...</p>
      </div>
    </div>
  );
};

export default ReviewDetail;
