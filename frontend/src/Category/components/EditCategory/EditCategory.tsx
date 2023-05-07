import { useForm } from "react-hook-form";
import { Outlet, useParams } from "react-router-dom";
import Category from "../../domain/Category";
import { useEffect } from "react";
import { getCategory } from "../../infreaestructure/getCategory";
import { updateCategory } from "../../infreaestructure/updateCategory";

export function EditCategoryPage() {
  return (
    <div>
      <h1>Editar Categoria</h1>
      <Outlet />
    </div>
  );
}

export function EditCategory() {
  const { id } = useParams();
  if (!id) return <></>;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>();

  useEffect(() => {
    const fetchCategory = async () => {
    const response = await getCategory(id);
    if (response) {
      setValue("description", response.description);
    }
    };
    fetchCategory();
  }, [id]);

  const onSubmit = async (data:Category) => {
    await updateCategory(data);
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Edit Category</h2>
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
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

