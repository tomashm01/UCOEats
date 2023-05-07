import { useForm } from "react-hook-form";
import Category from "../../domain/Category";
import { createCategory } from "../../infreaestructure/createCategory";

export default function AddCategory() {
  const {register,handleSubmit,formState: { errors },} = useForm<{description:string}>();

  const onSubmit = async (data:{description:string}) => {
    await createCategory(data.description);
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="buttons">
            <button className="submit" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
