<script lang="ts">
	import type { ManageAction } from '../../data/modalActionState';
	import type { IBlog } from '../../types/Blog';
	import ManageModal from '../modal/ManageModal.svelte';

	export let data: IBlog[];
	export let published: boolean;

	let actionID: string;
	let actionModal: boolean = false;
	let actionState: ManageAction;

	async function handleOnSubmit() {
		switch (actionState) {
			case 'unpublish':
				console.log(actionID);
				console.log('UNPUBLISH');
				break;

			case 'publish':
				console.log(actionID);
				console.log('PUBLISH');
				break;

			case 'edit':
				console.log(actionID);
				console.log('EDIT');
				break;

			case 'remove':
				console.log(actionID);
				console.log('REMOVE');
				break;

			default:
				break;
		}
	}
</script>

<div class="my-4 w-full overflow-x-auto">
	<table class="table-zebra table w-full px-4">
		<!-- head -->
		<thead>
			<tr>
				<th>ID</th>
				<th>Cover</th>
				<th>Title</th>
				<th>Summary</th>
				<th>Created At</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each data as item}
				<tr>
					<td>
						<p>{item.ID}</p>
					</td>
					<td>
						{#if item.CoverURL}
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask h-12 w-20">
										<img src={item.CoverURL} alt="blog cover" class="object-cover" />
									</div>
								</div>
							</div>
						{:else}
							<p>-</p>
						{/if}
					</td>
					<td>
						<p>{item.Title}</p>
					</td>
					<td>
						<p
							title="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
						>
							{item.Summary ? item.Summary : '-'}
						</p>
					</td>
					<td>
						<p>{new Date(item.CreatedAt).toDateString()}</p>
					</td>
					<td>
						{#if published}
							<button
								on:click={() => {
									actionState = 'unpublish'; // set action state to unpublish
									actionID = item.ID; // set action ID to current item ID
									actionModal = true;
								}}
								title="Unpublish Blog"
								class="btn-error btn-sm btn text-sm"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-5 w-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
									/>
								</svg>
							</button>
						{:else}
							<div class="flex gap-1">
								<button
									on:click={() => {
										actionState = 'publish'; // set action state to publish
										actionID = item.ID; // set action ID to current item ID
										actionModal = true;
									}}
									title="Publish Blog"
									class="btn-primary btn-sm btn text-sm"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-4 w-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
										/>
									</svg>
								</button>

								<button
									on:click={() => {
										actionState = 'edit'; // set action state to edit
										actionID = item.ID; // set action ID to current item ID
										actionModal = true;
									}}
									title="Edit Blog"
									class="btn-warning btn-sm btn text-sm"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-4 w-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
										/>
									</svg>
								</button>

								<button
									on:click={() => {
										actionState = 'remove'; // set action state to remove
										actionID = item.ID; // set action ID to current item ID
										actionModal = true;
									}}
									title="Remove Blog"
									class="btn-error btn-sm btn text-sm"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-4 w-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
							</div>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<!-- CONFIRMATION DIALOG -->
	<ManageModal
		on:click={handleOnSubmit}
		status={actionModal}
		{actionState}
		handleOnCancel={() => (actionModal = false)}
	/>
</div>