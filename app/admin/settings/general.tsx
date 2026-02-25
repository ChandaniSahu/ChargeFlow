import data from '../data/admin-data.json';

export default function General() {
  const generalData = data.settings.general;

  return (
    <div>
      <h2 className="text-[20px] font-semibold mb-1">
        Platform Settings
      </h2>
      <p className="text-gray-500 text-[14px] mb-6">
        Configure Basic Platform Information
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Platform Name" value={generalData.platformSettings.platformName} />
        <Input label="Support Email" value={generalData.platformSettings.supportEmail} />
        <Input label="Default Currency" value={generalData.platformSettings.defaultCurrency} />
        <Input label="Timezone" value={generalData.platformSettings.timezone} />
      </div>

      <div className="border-t my-8" />

      <Toggle
        title="Maintenance Mode"
        subtitle="Temporarily disable the platform for maintenance"
        enabled={generalData.toggles.maintenanceMode}
      />

      <Toggle
        title="Auto-approve Hosts"
        subtitle="Automatically approve new host applications"
        enabled={generalData.toggles.autoApproveHosts}
      />
    </div>
  );
}

function Input({ label, value }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] text-gray-600 font-medium">
        {label}
      </label>
      <input
        defaultValue={value}
        className="border rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#30EF0A]"
      />
    </div>
  );
}

function Toggle({ title, subtitle, enabled }: any) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h4 className="text-[15px] font-medium">{title}</h4>
        <p className="text-[13px] text-gray-500">{subtitle}</p>
      </div>
      <div
        className={`w-12 h-6 rounded-full p-1 transition ${
          enabled ? "bg-[#30EF0A]" : "bg-purple-200"
        }`}
      >
        <div className="bg-white w-4 h-4 rounded-full" />
      </div>
    </div>
  );
}