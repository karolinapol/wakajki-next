import { getHoliday } from "@/lib/holidays";
import DetailedHolidayComponent from "@/components/detailed-holiday/detailed-holiday";

export const HolidayDetailsPage = async ({
  params,
}: {
  params: Promise<{ holidayCardSlug: string }>;
}) => {
  const slug = (await params).holidayCardSlug;
  const detailedHoliday = await getHoliday(slug);

  return <DetailedHolidayComponent holiday={detailedHoliday} />;
};

export default HolidayDetailsPage;
