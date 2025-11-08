using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RiskTracker.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class RisksController : ControllerBase
{
    [HttpGet]
    public IActionResult GetRisks()
    {
        return Ok(new[] {
            new { id = 1, description = "Loose scaffolding", severity = "High" },
            new { id = 2, description = "Unsecured tools", severity = "Medium" }
        });
    }
}
