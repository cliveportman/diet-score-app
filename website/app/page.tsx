export default function Homepage() {
  return (
      <div className="max-w-[800px] mx-auto my-12 text-left">
        <h2 className="text-3xl font-bold mb-6">Privacy policy</h2>

        <h3 className="text-xl font-semibold mb-1.5">1. Information Collection and Use</h3>

        <h4 className="text-lg text-slate-400 font-bold mb-1.5">1.1 Local Data Storage</h4>
        <p className="mb-6 text-lg">This app stores all user data locally on the device using an SQLite database. No personal
          information or usage data is transferred to external servers or cloud services.</p>

        <h4 className="text-slate-400 font-bold text-lg mb-1.5">1.2 Types of Data Collected</h4>
        <p className="mb-6">- Number of servings for various food categories</p>

        <h4 className="text-slate-400 font-bold text-lg mb-1.5">1.3 Purpose of Data Collection</h4>
        <p className="mb-6">The sole purpose of data collection is to provide a local, on-device food tracking
          experience that allows users to monitor their daily food intake.</p>

        <h3 className="text-lg font-semibold mb-1.5">2. Data Storage and Security</h3>

        <h4 className="text-slate-400 font-bold text-lg mb-1.5">2.1 Local Storage</h4>
        <p className="mb-1.5">- All data is stored exclusively on the user's device</p>
        <p className="mb-1.5">- No external transmission of data occurs</p>
        <p className="mb-6">- Data is contained within the app's local database</p>

        <h4 className="text-slate-400 font-bold text-lg mb-1.5">2.2 Data Security</h4>
        <p className="mb-1.5">- Data is stored locally and protected by the device's existing security mechanisms</p>
        <p className="mb-6">- Users can manage app data through their device's application settings</p>

        <h3 className="text-xl font-semibold mb-1.5">3. User Control</h3>

      <h4 className="text-slate-400 font-bold text-lg mb-1.5">3.1 Data Management</h4>
      <p className="mb-1.5">Users can:</p>
      <p className="mb-1.5">- Add, edit, or delete their food tracking entries within the app</p>
        <p className="mb-1.5">- Clear all app data through the app's settings</p>
        <p className="mb-6">- Uninstall the app to completely remove all local data</p>

        <h3 className="text-xl font-semibold mb-1.5">4. Age Restriction</h3>
        <p className="mb-6">This application is intended for users 18 years of age and older. By downloading and using this app, users
          confirm they are 18 years of age or older.</p>

        <h3 className="text-xl font-semibold mb-1.5">5. Third-Party Services</h3>
        <p className="mb-6">No third-party services are used for data collection, storage, or transmission.</p>

        <h3 className="text-xl font-semibold mb-1.5">6. Changes to This Privacy Policy</h3>
        <p className="mb-6">We may update this privacy policy from time to time. Users will be notified of any changes through an in-app
          update or app store listing.</p>

        <h3 className="text-xl font-semibold mb-1.5">7. Contact Information</h3>
        <p className="mb-6">If you have any questions about this privacy policy, please contact wayofthegoat@theportman.co.</p>

            <p className="mb-6"><strong>Last Updated: 2 Nov 2024</strong></p>
      </div>
  );
}