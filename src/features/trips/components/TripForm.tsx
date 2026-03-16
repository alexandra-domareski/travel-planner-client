import { useState, useEffect } from "react";
import { ImageUp } from "lucide-react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import type { Trip } from "../types/trip.types";
import { useNavigate } from "react-router-dom";

interface TripFormProps {
  initialData?: Trip | null;
  onSubmit: (formData: FormData) => Promise<unknown>;
}

const TripForm = ({ initialData, onSubmit }: TripFormProps) => {
  const isEditMode = !!initialData;
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDestination(initialData.destination);
      setStartDate(new Date(initialData.startDate).toISOString().split("T")[0]);
      setEndDate(new Date(initialData.endDate).toISOString().split("T")[0]);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("destination", destination);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    if (coverImage) formData.append("imageUrl", coverImage);

    try {
      await onSubmit(formData);
      nav("/trips");
    } catch (error) {
      console.log("Error submitting form: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="e.g. Summer Adventure"
      />

      <Input
        label="Destination"
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
        placeholder="e.g. Paris"
      />

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <Input
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-[#3A2A1A] mb-2">
          Upload Cover Image
          {isEditMode &&
            initialData?.coverImage &&
            " (leave empty to keep current)"}
        </label>
        {isEditMode && initialData?.coverImage && !coverImage && (
          <img
            src={initialData.coverImage}
            alt="Current cover"
            className="mb-2 h-24 w-auto rounded object-cover"
          />
        )}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-[#D4C8BE] rounded-lg p-8 cursor-pointer hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-colors">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center">
              <ImageUp className="size-6 text-[#3B82F6]" />
            </div>
            {coverImage ? (
              <p className="text-sm font-medium text-[#3B82F6]">
                {coverImage.name}
              </p>
            ) : (
              <>
                <p className="text-sm font-medium text-[#1F2937]">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, WEBP up to 10MB
                </p>
              </>
            )}
          </div>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
            className="hidden"
          />
        </label>
      </div>

      <div className="flex gap-5 justify-end">
        <Button type="button" onClick={() => nav("/trips")} variant="secondary">
          Cancel
        </Button>

        <Button type="submit" disabled={submitting}>
          {submitting
            ? "Saving..."
            : isEditMode
              ? "Update Trip"
              : "Create Trip"}
        </Button>
      </div>
    </form>
  );
};
export default TripForm;
