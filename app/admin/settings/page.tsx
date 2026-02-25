import SettingsHeader from "./settingheader";
import General from "./general";
import Commission from "./commission";
import RolesPage from "./roles";

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const params = await searchParams; // 👈 unwrap it
  const type = params.type;
  console.log("SettingsPage searchParams:", params.type);

  return (
    <div className="overflow-hidden flex-1 py-4 pr-2 w-full">
      <h1 className="text-[28px] font-semibold text-white">
        Settings
      </h1>
      <p className="text-white/80 text-[14px] mb-6">
        Configure Basic Platform Information
      </p>

      <SettingsHeader active={type} />

      <div className="max-h-[82vh] overflow-y-auto no-scrollbar mt-6 bg-white/80 backdrop-blur-xl rounded-[20px] p-6 md:p-10">
        {type === "general" && <General />}
        {type === "commission" && <Commission />}
        {type === "roles" && <RolesPage />}
      </div>
    </div>
  );
}