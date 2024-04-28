using Microsoft.EntityFrameworkCore;
using EFGetStarted.ApplicationDbContext;
using EFGetStarted.Models;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("api/[controller]/[Action]")]

public class UserControler : ControllerBase
{
	private readonly AppDbContext _context;

	public UserControler(AppDbContext context)
	{
		_context = context;
	}


	//Get: api/User
	[HttpGet]
	public async Task<ActionResult<IEnumerable<Users>>> GetUser()
	{
		return await _context.Users.ToListAsync();
	}

	[HttpGet("{id}")]
	public async Task<ActionResult<IEnumerable<Users>>> GetUser(long id)
	{
		var usersId = await _context.Users.FindAsync(id);

		if (usersId == null)
		{
			return NotFound();
		}

		return usersId;
	}
}

