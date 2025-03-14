import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { UserData } from "../../interface";

// interface UserFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   phone: string;
//   birthDate: string;
// }

export default function AddUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const existingUser = location.state?.user || null; // استلام بيانات المستخدم إن وجدت

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserData>();

  // تحميل بيانات المستخدم في النموذج عند التعديل
  useEffect(() => {
    if (existingUser) {
      reset(existingUser);
    }
  }, [existingUser, reset]);

  const onSubmit = async (data: UserData) => {
    try {
      if (existingUser) {
        // تحديث المستخدم
        await axios.put(`https://dummyjson.com/users/${existingUser.id}`, data);
        toast.success("User updated successfully!");
      } else {
        // إضافة مستخدم جديد
        await axios.post("https://dummyjson.com/users/add", data);
        toast.success("User added successfully!");
      }
      navigate("/dashboard/UserList");
    } catch (error) {
      console.error(error);
      toast.error("Sorry, something went wrong.");
    }
  };

  return (
    <>
      <div className="m-3">
        <h3>{existingUser ? "Edit User" : "Add User"}</h3>
      </div>
      <hr />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg mt-5 m-5 p-4 border rounded-4 bg-white"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                {...register("age", { required: "Age is required" })}
              />
              {errors.age && (
                <span className="text-danger">{errors.age.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Phone Number</label>
              <input
                type="string"
                className="form-control"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Birth Date</label>
              <input
                type="date"
                className="form-control"
                {...register("birthDate", {
                  required: "Birth date is required",
                })}
              />
              {errors.birthDate && (
                <span className="text-danger">{errors.birthDate.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="text-center my-4">
          <button className="btn btn-warning w-50">
            {existingUser ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </>
  );
}
