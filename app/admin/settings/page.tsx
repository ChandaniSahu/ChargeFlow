import SettingsHeader from "./settingheader";
import General from "./general";
import Commission from "./commission";
import RolesPage from "./roles";
import Security from "./security";

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const params = await searchParams; // 👈 unwrap it
  const type = params.type;
  console.log("SettingsPage searchParams:", params.type);

  return (
    <div className="py-1 px-2 xl:px-4 overflow-hidden pb-4 w-full flex flex-col h-full">
      <h1 className="font-inter font-semibold desktop:text-[36px] desktop:mb-0 text-[30px] text-white">
        Settings
      </h1>
      <p className="font-arial text-white desktop:text-[20px] text-[15px] mb-5 -mt-1 leading-[19px] desktop:leading-tight">
        Configure Basic Platform Information
      </p>
      
      <SettingsHeader active={type} />

      <div className="flex-1 overflow-y-auto no-scrollbar mt-6 bg-white backdrop-blur-xl rounded-[20px] px-4 xl:px-10 py-3">
        {type === "general" && <General />}
        {type === "commission" && <Commission />}
        {type === "roles" && <RolesPage />}
        {type === "security" && <Security />}
      </div>
    </div>
  );
}