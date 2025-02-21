import { redirect } from "next/navigation";
import { DeployedContractsPage } from "../../../../../account/contracts/_components/DeployedContractsPage";
import { getAuthTokenWalletAddress } from "../../../../../api/lib/getAuthToken";

export default async function Page(props: {
  params: Promise<{ team_slug: string }>;
}) {
  const params = await props.params;
  const accountAddress = await getAuthTokenWalletAddress();

  if (!accountAddress) {
    return redirect(
      `/login?next=${encodeURIComponent(`/team/${params.team_slug}/~/contracts`)}`,
    );
  }

  return (
    <div className="container flex grow flex-col">
      <DeployedContractsPage
        address={accountAddress}
        className="flex grow flex-col pt-10 pb-10"
      />
    </div>
  );
}
